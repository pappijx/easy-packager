import { RecursiveComponentBuilder } from 'wiz-ui'
import { RecursiveComponentContext } from 'wiz-ui'

import { IDataFolderStructure, dataComment } from '../../../data/dataRecursive'
import SampleComponentComment from './SampleComponentComment'

export default function CommentSection() {
  const finalResultComment = (data: IDataFolderStructure) => {
    console.log(data)
  }

  return (
    <div className="App">
      <div
        style={{
          width: '500px',
        }}
      >
        <RecursiveComponentContext data={dataComment}>
          <RecursiveComponentBuilder
            component={SampleComponentComment}
            result={finalResultComment}
          />
        </RecursiveComponentContext>
      </div>
    </div>
  )
}
