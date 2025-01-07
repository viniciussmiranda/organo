import './Botão.css'

const Botão = (props) => {

    return (
    <button className='botao'>
          {props.texto}
    </button>
    )
}

export default Botão