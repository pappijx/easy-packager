export interface IDataFolderStructure {
  username: string
  type?: 'file' | 'folder'
  children?: IDataFolderStructure[]
  image?: string
  comment?: string
  profile?: string
  upvote?: number
  downvote?: number
}

export const dataFolderStructure: IDataFolderStructure = {
  username: 'Folder 1',
  type: 'folder',
  children: [
    {
      username: 'file',
      type: 'file',
    },
    {
      username: 'Folder 3',
      type: 'folder',
      children: [
        {
          username: 'file 1',
          type: 'file',
        },
        {
          username: 'file 2',
          type: 'file',
        },
        {
          username: 'file 3',
          type: 'file',
        },
        {
          username: 'file 4',
          type: 'file',
        },
        {
          username: 'file 5',
          type: 'file',
        },
      ],
    },
  ],
}

export const dataComment: IDataFolderStructure = {
  username: 'User 1',
  comment: 'Here I bring a new tool',
  profile: 'https://avatars.githubusercontent.com/u/24752589?v=4',
  image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
  upvote: 0,
  downvote: 0,
  children: [
    {
      username: 'User 1 child',
      comment: 'Here I bring a new tool',
      profile: 'https://avatars.githubusercontent.com/u/24752589?v=4',
      image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
      upvote: 0,
      downvote: 0,
      children: [
        {
          profile: 'https://avatars.githubusercontent.com/u/24752589?v=4',
          username: 'Sagar',
          comment: 'Here I bring a new tool',
          upvote: 0,
          downvote: 0,
        },
      ],
    },
    {
      username: 'Sparsh',
      comment: 'Here I bring a new tool',
      profile: 'https://avatars.githubusercontent.com/u/24752589?v=4',
      image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
      upvote: 0,
      downvote: 0,
      children: [
        {
          profile: 'https://avatars.githubusercontent.com/u/24752589?v=4',
          username: 'Sagar',
          comment: 'Here I bring a new tool',
          upvote: 0,
          downvote: 0,
        },
      ],
    },
  ],
}
