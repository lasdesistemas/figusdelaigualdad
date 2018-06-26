export default () => (
  <header className='header'>
    <a href='/'>
      <img
        className='igualdata-logo'
        src='static/assets/img/logos/igualdata.png'
        alt='Mundial de la Igualdad' />
    </a>
    <h1 className='title'>Figus de la igualdad</h1>
    <style jsx>{`
      .header {
        border-bottom: 1px solid #FFF;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 100px;
      }
      .igualdata-logo {
        height: 50px;
      }
      .title {
        color: #292965;
        font-size: 26px;
      }
    `}</style>
  </header>
)