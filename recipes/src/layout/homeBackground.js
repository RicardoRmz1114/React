import mealsImage from '../assets/img.jpeg'
const HomeBackground = props => {
    return(
        <>
            <div className='main-image'>
               <img src={mealsImage} alt="A table full of delicious food"/>
               {props.children}
           </div>
        </>
    )
}

export default HomeBackground;