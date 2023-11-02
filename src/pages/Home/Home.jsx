import { CharacterDesign } from "../../common/CharacterDesign/CharacterDesign";
import { bringCharacters } from "../../services/apiCalls";
import "./Home.css"
// import { NavigateButton } from "../../common/NavigateButton/NavigateButton"
import React, { useState, useEffect } from "react"

export const Home = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        if (characters.length === 0) {

            setTimeout(() => {

                bringCharacters()
                    .then(
                        results => {
                            setCharacters(results.data.results);
                            /*console.log(results);*/
                        }
                    )
                    .catch(error => console.log(error));
            }, 750);



        };



    }, [characters]);

    return (
        <div className="homeDesign"> 
            {/*<NavigateButton
                path={"/login"}
                name={"Login"} 
            />
            
            <NavigateButton
                path={"/register"}
                name={"Register"} 
            />*/}
            {
                characters.length > 0

                    ? (<div className="showcaseCharacters"> 
                        {

                           characters.map(
                                character => {
                                    return (
                                        <CharacterDesign 
                                            key={character.id}
                                            name={character.name}
                                            image={character.image}
                                            />
                                    )
                                }
                            )

                        }
                        
                        
                        </div>)

                    : (<div> aun no han llegado </div>)
            }
        </div>
    )
}