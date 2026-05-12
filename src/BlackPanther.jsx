import {useNavigate} from 'react-router-dom';

const BlackPanther = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    return (
        <div>
            <h1>Black Panther</h1>
            <p>
                Black Panther is a fictional character appearing in American comic books published by Marvel Comics. The character was created by writer-editor Stan Lee and artist-coplotter Jack Kirby, with the first appearance of the character in 'Fantastic Four' #52 (July 1966) and in the role of the Black Panther in 'Jungle Action' #6-9 (1973–1974).
            </p>
            <button onClick={handleClick}>To Heros</button>
        </div>
    );
};

export default BlackPanther;
