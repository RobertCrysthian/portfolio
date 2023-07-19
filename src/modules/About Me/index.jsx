import img from "../assets/capybara.JPG"
import "./AboutMe.css"

export default function AboutMe(){
    return(
        
        <div class="container_aboutMe">
            <div className="elements">
                <h2>About me: </h2>
                <img src={img} alt="Foto do portifólio"/>

            </div>
            <div className="description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum scelerisque arcu. Curabitur finibus congue placerat. Quisque at tortor in risus fringilla egestas. Vivamus iaculis mauris et dolor viverra, consequat mattis neque cursus. Sed dapibus ante ac quam vehicula, a laoreet augue ullamcorper. Integer sodales lorem ac rutrum pretium. Sed commodo sem sit amet elit imperdiet placerat. Praesent ac interdum odio. Aliquam iaculis, mauris ac faucibus finibus, ipsum est eleifend dui, ac mattis velit quam at tellus. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur vel felis sapien. Phasellus euismod augue eu ligula semper, elementum dapibus tortor vestibulum.</p>
                </div>
        </div>
    )
}