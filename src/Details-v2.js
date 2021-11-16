import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

const Details = (props) => {
  // setLoading = (newValue) => {
  //     loading = newValue
  // }
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [pet, setPet] = useState({});

  // you can't call an async function from inside useEffect
  const fetchPet = async () => {
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
    const json = await res.json();
    setLoading(false);
    setPet(json.pets[0]);
  };
  // useEffect we pass a callback to
  // it fires when the component mounts and dependency changes
  useEffect(() => {
    fetchPet();
  }, []);

  const [toggleModal, setToggleModal] = useState(false);

  const adopt = () => {
    window.location = "http://bit.ly/pet-adopt";
  };

  const { animal, breed, city, state, description, name, images, showModal } =
    pet;

  return loading ? (
    <h2>loading...</h2>
  ) : (
    <div className="details">
      <Carousel images={images} />
      <div>
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
        <ThemeContext.Consumer>
          {([theme]) => (
            <button
              onClick={() => setToggleModal(true)}
              style={{ backgroundColor: theme }}
            >
              Adopt {name}
            </button>
          )}
        </ThemeContext.Consumer>
        <p>{description}</p>
        {toggleModal ? (
          <Modal>
            <div>
              <h1>Would you like to adopt {name}?</h1>
              <div className="buttons">
                <button onClick={adopt}>Yes</button>
                <button onClick={() => setToggleModal(false)}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

export default Details;
