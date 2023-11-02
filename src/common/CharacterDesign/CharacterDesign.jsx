
import './CharacterDesign.css';


export const CharacterDesign = ({ key, name, image }) => {

    return (
        <div className='characterDesignCard' >
            <div>
                <img
                    className="avatarDesign"
                    src={image}
                    alt={key}>
                </img>

            </div>

            <div>{name}</div>


        </div>
    )
}