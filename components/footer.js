export default () => (
  <footer className='footer'>
    <p>Hecho con ❤ por 
      <a href='https://twitter.com/lasdesistemas' target='blank'>
        [LAS] de sistemas
      </a> y 
      <a href='http://chequeado.com/' target='blank'>
        Chequeado
      </a>en la Hackaton Argentina del 
      <a href='http://www.igualdata.org' target='blank'>
      Mundial de la Igualdad
      </a> 
    </p>
    <style jsx>{`
      .footer {
        display: flex;
        justify-content: center;
      }
      a {
        margin: 0 5px;
        color: #292965;
        text-decoration: none;
        font-weight: bold;
        cursor: pointer;
      }
      a:hover {
        color: #bd3547;
      }
      @media (max-width: 768px) {
        .footer p {
          text-align: center;
          font-size: 12px;
        }
      }
    `}</style>
  </footer>
)