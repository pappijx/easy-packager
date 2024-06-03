import { useState } from 'react'
import { FaChevronCircleDown } from 'react-icons/fa'
import { BiSolidUpvote } from 'react-icons/bi'
import { BiSolidDownvote } from 'react-icons/bi'
import { IRecursiveComponent } from 'wiz-ui'
import { MdDelete } from 'react-icons/md'
import { IDataFolderStructure } from '../../../data/dataRecursive'

const SampleComponentComment = ({
  data,
  children,
  accessKey,
  deleteItem,
  addItem,
  updateItem,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
IRecursiveComponent<IDataFolderStructure, any>) => {
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
          borderRadius: '10px',
          border: 'solid',
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
            <img src={data.profile} width="40px" height="40px" />
            <p>{data.username}</p>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <MdDelete onClick={() => deleteItem(accessKey)} fontSize="24px" />
            {children && (
              <FaChevronCircleDown
                onClick={() => setShow((prev) => !prev)}
                style={{
                  rotate: show ? '180deg' : '0deg',
                  transition: '0.5s',
                  cursor: 'pointer',
                }}
              />
            )}
          </div>
        </div>
        <p>{data.comment}</p>
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            cursor: 'pointer',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <BiSolidUpvote
              fontSize="24px"
              color={data.upvote ? 'orange' : ''}
              onClick={() =>
                updateItem(
                  {
                    ...data,
                    upvote: data.upvote! + 1,
                  },
                  accessKey,
                )
              }
            />
            {data.upvote}
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <BiSolidDownvote
              fontSize="24px"
              color={data.downvote ? 'orange' : ''}
              onClick={() =>
                updateItem(
                  {
                    ...data,
                    downvote: data.downvote! + 1,
                  },
                  accessKey,
                )
              }
            />
            {data.downvote}
          </div>
        </div>
        <input
          placeholder="Enter your comment..."
          style={{
            display: 'block',
            borderRadius: '10px',
            border: 'none',
            width: '93%',
            padding: '1rem',
          }}
          onKeyDown={(e) => {
            if (e.code === 'Enter') {
              addItem(
                {
                  profile: 'https://avatars.githubusercontent.com/u/24752589?v=4',
                  username: 'New sagar',
                  comment: e.currentTarget.value,
                  upvote: 0,
                  downvote: 0,
                },
                accessKey,
              )
              e.currentTarget.value = ''
              setShow(true)
            }
          }}
        />
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
