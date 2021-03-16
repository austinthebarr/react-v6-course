import { Link } from "react-router-dom";

// import React from "react";

// //NON JSX
// // const Pet = (props) => {
// //   return React.createElement("div", {}, [
// //     React.createElement("h2", {}, props.name),
// //     React.createElement("h3", {}, props.animal),
// //     React.createElement("h3", {}, props.breed),
// //   ]);
// // };

// // Writing js to implement html
// const Pet = ({ name, animal, breed, images, location, id }) => {
//   let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
//   if (images.length) {
//     hero = images[0];
//   }
//   return (
//     <div id={id}>
//       <img src={images} alt={name} />
//       <h2>{name}</h2>
//       <h3>{animal}</h3>
//       <h3>{breed}</h3>
//       <h3>{location}</h3>
//     </div>
//   );
// };

// export default Pet;

const Pet = ({ name, animal, breed, images, location, id }) => {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }

  return (
    <Link to={`/details/${id}`} className="relative block">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="absolute bottom-0 left-0 bg-gradient-to-tr from-white to-transparent pr-2 pt-2">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
