import "./SectionTitle.css"

const SectionTitle = ({ secTitle }) => {
  return (
    <div className='section_title'>
      <h2 className='title_name'>{secTitle}</h2>
    </div>
  )
}

export default SectionTitle