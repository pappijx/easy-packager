interface InputSearchFilterType
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  removeFilter: () => void
}
export const InputSearchFilter = ({ removeFilter, value, ...props }: InputSearchFilterType) => {
  return (
    <div
      style={{
        width: '100%',
        position: 'relative',
      }}
    >
      <input value={value} {...props} />
      {removeFilter && <div onClick={removeFilter}>x</div>}
    </div>
  )
}
