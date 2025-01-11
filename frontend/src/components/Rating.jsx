import { PiArmchairFill, PiArmchair} from 'react-icons/pi'

const Rating = ({ value, text }) => {
  return (
    <div className='rating'>
        <span>
            { value >= 40 ? <PiArmchairFill /> : <PiArmchair />}
        </span>
        <span>
            { value >= 60 ? <PiArmchairFill /> : <PiArmchair />}
        </span>
        <span>
            { value >= 80 ? <PiArmchairFill /> : <PiArmchair />}
        </span>
        <span>
            { value >= 100 ? <PiArmchairFill /> : <PiArmchair />}
        </span>
        <span>
            { value >= 120 ? <PiArmchairFill /> : <PiArmchair />}
        </span>
        <span className="rating-text">{ text && text }</span>
    </div>
  );
};

export default Rating