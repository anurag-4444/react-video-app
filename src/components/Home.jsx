import React from 'react'
import '../styles/home.css'
import one from '../assets/1.jpg'
import two from '../assets/2.jpg'
import three from '../assets/3.jpg'
import four from '../assets/4.jpg'
import five from '../assets/5.png'

const Home = () => {
  

  return (<>
    <div className='imageSlider'>
      <button  className='btn' >&#8249;</button>
      <button  className='btn1'>&#8250;</button>
      <div className='sliderItem'>
        <img className='image' src={one} alt="img" />
        <img className='image' src={two} alt="img" />
        <img className='image' src={three} alt="img" />
        <img className='image' src={four} alt="img" />
      </div>
    </div>

    <div className="services">

      <div className="service">
      <h1>SERVICES</h1>

      <div className="content">

        <div className="image2"><img src={five} alt="img" /></div>

        <div className='para'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsam hic dignissimos distinctio cumque ipsum dolorem eos odio. Eligendi dignissimos aliquam dicta officia? Ducimus, recusandae omnis dolor deserunt facilis beatae laudantium consequuntur, magni nisi molestiae nihil nam, quasi ratione? Ab perferendis et consequatur porro magni autem repudiandae sequi velit fugiat, quam molestiae nesciunt expedita dicta consequuntur ipsam sed quisquam quae consectetur neque voluptas? Accusamus reprehenderit asperiores amet exercitationem obcaecati corrupti commodi voluptatum praesentium repellat et eveniet quasi sequi laborum, qui velit possimus maiores cupiditate ipsa culpa earum dolorem perspiciatis voluptas. Repudiandae dolore officiis ex fugiat atque iure vitae quos eligendi consectetur dolorem illo repellendus sequi, possimus autem veritatis impedit voluptate esse. Sed ratione ea est modi magnam labore ullam natus asperiores praesentium exercitationem, vitae at qui, iusto debitis dolorem iure pariatur repellat cum nesciunt facere aliquam deleniti repellendus quo. Sequi tenetur minima repellendus maiores nat</p></div>

      </div>
    </div>
    </div>
    </>
  )
}

export default Home