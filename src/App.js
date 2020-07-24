import React from 'react';
import PropTypes from 'prop-types'

const cake_list = [
  {
    id: 1,
    name: "딸기",
    url: "https://mblogthumb-phinf.pstatic.net/MjAxOTAxMTNfODIg/MDAxNTQ3MzEwOTYyODIz.Zb5cgY9p9KKSpX5fs9AqNVZ6IcnsuHxa0xprfKI2CmYg.UKqvUYiT5O7K1LkFSxjBB2tNqyfIHfRpg4-l0y8xjVYg.JPEG.ghkwndchemdg/IMG_3739.JPG?type=w800",
    rating: 4.6
  },
  {
    id: 2,
    name: "초코",
    url: "https://www.google.com/search?q=%EC%B4%88%EC%BD%94%EC%BC%80%EC%9D%B4%ED%81%AC+url&rlz=1C5GCEA_enKR897KR897&sxsrf=ALeKk01hUIHAfI0yM39xTHodDRGp1TDfZQ:1595296721531&tbm=isch&source=iu&ictx=1&fir=TcvCaulZPe9aFM%252CD6smq1i6EidinM%252C_&vet=1&usg=AI4_-kR3vjd6Lt8tCPjzCw7zN51d5d64pA&sa=X&ved=2ahUKEwjarJezn93qAhWRBIgKHeCuBsIQ9QEwCHoECAkQEA#imgrc=TcvCaulZPe9aFM",
    rating: 4.9
  },
  {
    id: 3,
    name: "고구마",
    url: "https://www.google.com/imgres?imgurl=http%3A%2F%2Fitem.ssgcdn.com%2F97%2F10%2F42%2Fitem%2F1000026421097_i1_1200.jpg&imgrefurl=http%3A%2F%2Femart.ssg.com%2Fitem%2FitemView.ssg%3FitemId%3D1000026421097%26siteNo%3D6001&tbnid=JzNpxmFGrGyC3M&vet=12ahUKEwiN2o3Ln93qAhUJ3pQKHf0kAHYQMygBegUIARC4AQ..i&docid=cviaAUTXGYW0qM&w=600&h=600&q=%EA%B3%A0%EA%B5%AC%EB%A7%88%EC%BC%80%EC%9D%B4%ED%81%AC&ved=2ahUKEwiN2o3Ln93qAhUJ3pQKHf0kAHYQMygBegUIARC4AQ",
    
  }
]

function Cake({name, url, rating}) {
  return (
    <div>
      <h3>I like {name} cake</h3>
      <img src={url} alt={name}></img>
      <h3>{rating}/5.0</h3>
      <hr />
    </div>
  )
}

Cake.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  rating: PropTypes.number
}

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      {cake_list.map((cake) => {
        return (
          <Cake key={cake.id} name={cake.name} url={cake.url} rating={cake.rating} />
        )
      })}
    </div>
  );
}

export default App;
