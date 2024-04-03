import { RecursiveComponentBuilder } from '../../../../src/components'
import { CiCircleChevDown, CiCircleChevUp } from 'react-icons/ci'
import { useState } from 'react'
import { RecursiveComponentContext } from '../../../../src/components'

import { MdDeleteForever } from 'react-icons/md'
import { CiEdit } from 'react-icons/ci'
import { IDataFolderStructure, dataFolderStructure, dataComment } from '../../data/dataRecursive'
import { IRecursiveComponent } from '../../../../src/components/RecursiveComponentBuilder/RecursiveComponentBuilder'

const SampleComponent = ({
  data,
  children,
  accessKey,
  deleteItem,
  addItem,
}: IRecursiveComponent<IDataFolderStructure>) => {
  const [show, setShow] = useState(false)
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        marginTop: '1rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '300px',
          backgroundColor: '#EFEFEF',
          padding: '0.5rem',
          borderRadius: '10px',
          alignItems: 'center',
          gap: '0.5rem',
          cursor: 'pointer',
        }}
      >
        {accessKey}
        <h3>{data.username}</h3>
        {children &&
          (show ? (
            <CiCircleChevUp onClick={() => setShow(false)} fontSize="24px" />
          ) : (
            <CiCircleChevDown onClick={() => setShow(true)} fontSize="24px" />
          ))}

        {accessKey && deleteItem && <button onClick={() => deleteItem(accessKey)}>Delete</button>}
        {accessKey && addItem && data.type === 'folder' && (
          <button
            onClick={() =>
              addItem(
                {
                  username: 'New',
                  type: 'file',
                },
                accessKey,
              )
            }
          >
            File
          </button>
        )}
        {accessKey && addItem && data.type === 'folder' && (
          <button
            onClick={() =>
              addItem(
                {
                  username: 'New',
                  children: [],
                  type: 'folder',
                },
                accessKey,
              )
            }
          >
            Folder
          </button>
        )}
      </div>
      {show && children && (
        <div
          style={{
            paddingLeft: '1rem',
          }}
        >
          {children}
        </div>
      )}
    </div>
  )
}

const SampleComponentComment = ({
  data,
  children,
  accessKey,
  deleteItem,
  addItem,
  updateItem,
}: IRecursiveComponent<IDataFolderStructure>) => {
  const [show, setShow] = useState(false)
  const [editing, setEditing] = useState(false)
  const [newData, setNewData] = useState<IDataFolderStructure>()
  const [addNewcomment, setAddNewcomment] = useState(false)
  const [newComment, setNewComment] = useState('')

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        marginTop: '1rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '300px',
          backgroundColor: '#EFEFEF',
          padding: '0.5rem',
          borderRadius: '10px',
          alignItems: 'center',
          gap: '0.5rem',
          cursor: 'pointer',
        }}
      >
        {accessKey}
        <h3>{data.username}</h3>
        {deleteItem && (
          <MdDeleteForever color="red" onClick={() => deleteItem(accessKey)} fontSize="24px" />
        )}
        {children &&
          (show ? (
            <CiCircleChevUp onClick={() => setShow(false)} fontSize="24px" />
          ) : (
            <CiCircleChevDown onClick={() => setShow(true)} fontSize="24px" />
          ))}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {data.image && <img src={data.image} width="100px" height="100px" />}
        {data.comment &&
          (editing ? (
            <div>
              <input
                type="text"
                placeholder={data.comment}
                onChange={(e) =>
                  setNewData(() => ({
                    ...data,
                    comment: e.target.value,
                  }))
                }
              ></input>
              <button
                onClick={() => {
                  updateItem(newData, accessKey)
                  setEditing(false)
                }}
              >
                Update
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <p>{data.comment}</p>
              <CiEdit onClick={() => setEditing(true)} fontSize="24px" />
            </div>
          ))}

        {addNewcomment && (
          <div>
            <input
              type="text"
              placeholder="Add a comment"
              onChange={(e) => setNewComment(e.target.value)}
            ></input>
            <button
              onClick={() => {
                addItem(
                  {
                    username: 'New user',
                    comment: newComment,
                    children: [],
                  },
                  accessKey,
                )
                setAddNewcomment(false)
              }}
            >
              Add
            </button>
          </div>
        )}

        <button onClick={() => setAddNewcomment(true)}>Add Comment</button>
      </div>
      {show && children && (
        <div
          style={{
            transition: '1s',
            paddingLeft: '1rem',
          }}
        >
          {children}
        </div>
      )}
    </div>
  )
}

export default function RecursiveComponentCreator() {
  const finalResultFolderStructure = (data: IDataFolderStructure) => {
    console.log(data)
  }
  const finalResultComment = (data: IDataFolderStructure) => {
    console.log(data)
  }

  return (
    <div className="App">
      <RecursiveComponentContext data={dataFolderStructure}>
        <RecursiveComponentBuilder
          component={SampleComponent}
          result={finalResultFolderStructure}
        />
      </RecursiveComponentContext>

      <RecursiveComponentContext data={dataComment}>
        <RecursiveComponentBuilder component={SampleComponentComment} result={finalResultComment} />
      </RecursiveComponentContext>
    </div>
  )
}
