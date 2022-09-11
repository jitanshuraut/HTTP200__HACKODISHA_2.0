import React from 'react'
import { useLocation } from 'react-router-dom';
import style from "../styles/data.module.css"
function Data() {
    const location = useLocation();
    const flood={
        overview:`Floods are one of the most recurring disasters across the world. It causes enormous socio-economic loss in the country. Not just monsoon season, it may hit the land at any time influenced by several factors.
        Natural disaster management has set some rules as precautions of flood to safeguard the community.
        Here is a detailed discourse on dos and don'ts during flood catastrophes`,
    
        do:[
            "Elevate your home from the base while constructing to avoid entry of floodwater or construct walls to stop it.",
            "Install 'check valves' in sewer pipes to prevent floodwater from entering the drains of your home.",
            "Seal the basement walls to let water enter.",
            "If your home is in very low land, then shift to a safer place and keep all furniture at an elevated level.",
            "Keep all your documents in a safe water-proof bag.",
            "keep updated with flood safety tips given by the Government.",
            "Know the safest route of escape to the nearest shelter.",
            "Install the electricity supplying switches and plugs above a certain level from the floor, which is most unlikely to get reached by the floodwater.",
            "Keep all your electronic devices charged"
        ],
        donts:[
            "Do not go in the flood-prone zone or leave your home if there is any flood forecast.",
            "Take all valuables with you and do not keep any valuables at home as you have to evacuate the place.",
            "Do not ignore advice, messages, or instructions given by Government and local municipal bodies.",
            "Do not litter plastics, garbage, or any blockage making materials in the drains"
        ],
        extrapoint:"Safety precautions for floods when it is about to hit your land are as follows:",
        data_extrapoint:[
            "Keep calm and updated with news broadcast channels.",
            "Be aware of the flash flood",
            "Take all flood safety measures.",
            "Do not enter flood-prone areas as precautions during floods",
            "Keep the drainage system of your house clean and out of any blockage.",
            "Unplug electrical gadgets and machinery and keep away from the reach of water",
            "Store enough food and drinking water with you.",
            "Turn off gas valves and connected devices.",
            "Move family and pets in the safe zone.",
            "Do not keep any valuables in homes.",
        ]
    }
    
    const fire={
        overview:"For your safety and that of our patrons, please ensure you are familiar with the procedures for evacuating the premises and your responsibilities in emergency situations.It is important, so please make sure you know the location of the closest fire exit in each area of the hotel, as well as the location of fire hose reels, fire extinguishers and fire blankets. Also, please ensure your work area is kept clean and tidy. Do not block corridors, entrances or exits.",
    
        do:[
            "Always Remain Calm in the event of a fire.",
            "If no one is available, activate the closest fire alarm or dial switchboard or operator. If one is not, call the emergency fire services number as per the local authority.",
            "State your name, location, the location of the fire or smoke and the type and size of the fire (ie electrical, fuel or paper).",
            "If possible, without endangering yourself, try to put out the fire ensuring you use the proper extinguisher.",
            "If this is not possible, close all doors to the fire area and follow the evacuation procedure.",
            "If it is safe to do so, wait in an area that is a safe distance from the fire so you are able to direct personnel arriving on the scene to the location of the fire.",
            
    
        ],
        extrapoints:"Things to remember in an emergency",
    
        data_extrapoints:[
            "Do not use the elevator.",
            "Feel any door you are going to open (with the back of your hand) to see if it is hot. If so do not open the door",
            "Stay low to the floor and if necessary crawl to avoid smoke “Stop, Drop and Roll”.",
            "In a fire, smoke kills 80% of people - more than the actual fire itself.",
        ]
    }
    
    
    const earthquake={
        overview:"Earthquakes all over the world originate along the fault lines between two tectonic plates. You can refer to this image below for understanding worldwide plate tectonics better.",
    
        do:[
            "Keeping calm and reassuring others.",
            "Moving away from buildings and electrical wires to open spaces.",
            "Taking cover under a desk or table if you are indoors.",
            "Staying away from glass doors and windows if you are indoors.",
            "Stop and stay inside your vehicle if you are driving.",
            "Set your pets free to let them run outside.",
            "Put out all kinds of open flames.",
        ],
    
        extrapoints:"nsurance Options to Combat Earthquake Crises",
    
        data_extrapoint:[
            "Earthquakes cannot be predicted or prevented. However, you can opt for a home insurance policy to get covered against property damages arising from earthquakes. A valid home insurance policy can provide you with financial support to deal with the damage repair, renovation and rebuilding expenses.",
            "India has experienced a number of earthquakes over the last century. Studies show that over 50% of India’s total area is prone to earthquakes. In fact, the entire north-eastern region, including the Himalayan belt, is at risk of experiencing earthquakes with a magnitude above 8.0.",
            "With a clear understanding of the effects and causes of earthquakes, along with the safety measures and insurance options, we hope you will be able to deal with earthquakes in a better manner. ",
        ],
    }
    
    
    const tsunami={
        overview:"Tsunamis are large ocean waves caused by major earthquakes beneath the ocean floor, or landslides into the ocean. In the U.S., tsunamis threaten the West Coast, Hawaii and Alaska as well as Puerto Rico and the Virgin Islands. A tsunami can occur during any season and at any time. In the event of a disaster like this, Save the Children is on the ground first, providing tsunami relief. Save the Children offers these tsunami safety tips to show parents what to do when a tsunami hits.",
    
        do:[
            "Spend time as a family discussing tsunamis. Explain that a tsunami is a natural event, and not anyone’s fault. Use simple words that young children can understand.",
            "Find out if your home, school, childcare provider, workplace or other frequently visited locations are in tsunami hazard areas. Also, know the height of your street above sea level and the distance of your street from the coast. Evacuation orders may be based on these numbers",
            "If your child’s school or childcare center is in a tsunami zone, learn their emergency plan and evacuation plan. You may be required to pick up children from another location. Review these plans with your children",
            "Listen to a local news station on a NOAA Weather Radio, a portable radio or TV. Listen for and respond to tsunami watches and warnings. Evacuate if told to do so or if you feel unsafe.",
            "Practice so that children can evacuate quickly and safely if a tsunami hits. Plan and practice two ways out of your neighborhood, in case one route is blocked. Choose evacuation areas 100 feet above sea level, or 2 miles inland",
            "If you feel an earthquake that lasts 20 seconds or longer, you should Drop, Cover and Hold On. Protect yourself from the earthquake by dropping to the ground, taking cover under something like a table, and hold on to it.",
            "After a coastal area earthquake, a tsunami may come within minutes; first responders may not have time to sound sirens or issue evacuation orders.",
            "Large earthquakes may have aftershocks that may trigger tsunamis. When the earthquake stops, move your family members to higher ground – away from the coast"
        ],
    
        extrapoint:"What to do after a tsunami",
        data_extrapoints:[
            "If it’s safe, include your children in clean-up activities after the tsunami. Children will find comfort in having a job to do and seeing the household return to normal. Children will find comfort in having a job to do and seeing the household return to normal. ",
            "Allow children to express their feelings after the tsunami. Listen carefully, show understanding and offer reassurance. Remind them that the situation is not permanent, and their safety is your utmost priority.",
        ]
    }
    
    
    const Tornado={
        overview:"To stay safe during a tornado, prepare a plan and an emergency kit, stay aware of weather conditions during thunderstorms, know the best places to shelter both indoors and outdoors, and always protect yourself from injury, especially your head.",
    
    
        do:[
            "Fresh batteries and a battery-operated TV, radio, or internet-enabled device to listen to the latest emergency weather information",
            "A tornado emergency plan including access to a safe shelter for yourself, your family, people with special needs, and your pets",
            "An emergency kit (including water, non-perishable food, and medication)",
            "A list of important information, including telephone numbers",
            " The following weather signs may mean that a tornado is approaching: A dark or green-colored sky A large, dark, low-lying cloud Large hail A loud roar that sounds like a freight train"
        ],
        extrapoint:"Know where to shelter.",
    
        data_extrapoint:[
            "Go to the basement or an inside room without windows on the lowest floor (bathroom, closet, center hallway).",
            "If possible, avoid sheltering in any room with windows.",
            "For added protection get under something sturdy (a heavy table or workbench). Cover your body with a blanket, sleeping bag or mattress. Protect your head with anything available",
            "Do not stay in a mobile home.",
        ]
    }
    
    
    
    let name=location.state.id
    
    
  return (
   <>
    <img src="earthquake.png" alt="photo" width="100%" className={style.img1}/>
    <div className={style.text}>{location.state.id}</div>

    <div className={style.info}>
        <div className={style.imgContainer}><img src="earthquake2.png" alt="Earthquake" className={style.image5}/></div>
        <div className={style.details}>
            <div className={style.heading}>{location.state.id} Overview</div>
            <div className={style.info}>{flood.overview}</div>
        </div>
    </div>

    <div className={style.container}>
        <div className={style.do}>
            <div className={style.head2}>
          <img src="check-mark.png" alt="check mark" width="70px"/>
                <div className={style.heading2}>Do's</div>
            </div>
            <div className={style.info5}>
              
                {/* <div className={style.point}>
                    <img src="check-mark.png" className={style.icon6} alt="check" width="50px"/>
                    <div className={style.text6}>Put out all kinds of open flames.</div>
                </div> */}
                {
                    flood.do.map((ele)=>{
                        return(<div className={style.point}>
                            <img src="check-mark.png" className={style.icon6} alt="check" width="50px"/>
                            <div className={style.text6}>{ele}</div>
                        </div>)
                    })
                }
            </div>

        </div>


        <div className={style.dont}>
            <div className={style.head2}>
               <img src="check-mark.png" alt="check mark" width="70px"/>
                <div className={style.heading2}>Don'ts</div>
            </div>
            <div className={style.info5}>
                

                {
                    flood.donts.map((ele)=>{
                        return(<div className={style.point}>
                            <img src="cancel.png" className={style.icon6} alt="check" width="50px"/>
                            <div className={style.text6}>{ele}</div>
                        </div>)
                    })
                }
              
            </div>

        </div>
    </div>


    <div className={style.tips}>
        <div className={style.head2}>
         <img src="check-mark.png" alt="check mark" width="70px"/> 
            <div className={style.heading2}>Some Tips:-</div>
        </div>
        <div className={style.info5}>
         

            {
                flood.data_extrapoint.map((ele)=>{
return(    <div className={style.point}>
    <img src="hand.png" className={style.icon6} alt="check" width="50px"/>
    <div className={style.text6}>{ele}</div>
</div>)
                })
            }
           
        </div>
    </div>
   </>
  )
}

export default Data