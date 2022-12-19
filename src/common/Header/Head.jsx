const Head = () => {
  return (
    <>
      <section className='head'>
        <div className="container d_flex">
            <div className="left row">
                <i className="fa fa-phone"></i>
                <label>0335037182</label>
                <i className='fa fa-envelope'></i>
                <label>example@gmail.com</label>
            </div>  
            <div className="right row Rtext">
                <label>Theme FAQ</label>
                <label>Need Helps</label>
                <span><i class="fa-solid fa-dollar-sign"></i></span>
                <label htmlFor="">EN</label>
                <span><i class="fa-solid fa-dollar-sign"></i></span>
                <label htmlFor="">USD</label>
            </div>  
        </div>
      </section>
    </>
  )
}

export default Head
