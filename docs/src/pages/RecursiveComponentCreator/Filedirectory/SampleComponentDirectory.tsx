import { useState } from 'react'
import { FaChevronCircleDown } from 'react-icons/fa'
import { IRecursiveComponent } from 'all-easy-packager'
import { MdDelete } from 'react-icons/md'
import { IDataFolderStructure } from '../../../data/dataRecursive'
import { FaFile } from 'react-icons/fa'
import { FaFolder } from 'react-icons/fa'

const SampleComponentComment = ({
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
        width: '100%',
        marginTop: '1rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          backgroundColor: '#E3E3E3',
          borderRadius: '5px',
          border: 'solid 1px',
          gap: '1rem',
          padding: '0.5rem',
          // boxShadow: '0px 10px 10px'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <p>{data.username}</p>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              cursor: 'pointer',
            }}
          >
            {<MdDelete fontSize="20px" onClick={() => deleteItem(accessKey)} />}
            {data.type === 'folder' && (
              <>
                <FaFile
                  fontSize="20px"
                  onClick={() =>
                    addItem(
                      {
                        type: 'file',
                        username: 'New file',
                      },
                      accessKey,
                    )
                  }
                />
                <FaFolder
                  fontSize="20px"
                  onClick={() =>
                    addItem(
                      {
                        type: 'folder',
                        username: 'New Folder',
                      },
                      accessKey,
                    )
                  }
                />
                <FaChevronCircleDown fontSize="20px" onClick={() => setShow((prev) => !prev)} />
              </>
            )}
          </div>
        </div>

        {children && show && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
            }}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  )
}

export default SampleComponentComment
