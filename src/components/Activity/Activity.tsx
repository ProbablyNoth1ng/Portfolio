import './Activity.scss'
import { useEffect, useState } from "react";
import {ActivityCalendar} from "react-activity-calendar";
import { motion  } from "framer-motion"
import cat from '../../assets/cat900.png'

const GITHUB_API = "https://api.github.com/graphql";
const TOKEN = import.meta.env.VITE_GITHUB_TOKEN; 


const Activity = () => {
    const [contributions, setContributions] = useState([])
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
    const [blockSize, setBlockSize] = useState<number>()

    console.log(screenWidth)
    useEffect(() => {
        const fetchContribution = async() => {
            const query = {
                query: `{
                    user(login:"ProbablyNoth1ng"){
                        contributionsCollection {
                            contributionCalendar{
                                weeks{
                                   contributionDays{
                                    date
                                    contributionCount
                                    color
                                   } 
                                }
                            }
                        }
                    }
                }`,
            }


            const res = await fetch(GITHUB_API,{
                method:"POST",
                headers:{
                    Authorization:`Bearer ${TOKEN}`,
                    "Content-Type": "application/json",
                },
                body:JSON.stringify(query),
            })
            
            const data:any = await res.json()
            console.log(data)
            const weeks = data.data.user.contributionsCollection.contributionCalendar.weeks
            console.log(weeks)
            const formattedData = weeks.flatMap((week:any) => 
                week.contributionDays.map((day:any) => ({
                    date: day.date, 
                    count: day.contributionCount,
                    level: Math.min(day.contributionCount, 4),

                }))
            )

            
            console.log(formattedData)
            setContributions(formattedData)
        }

        
        fetchContribution();
    },[])

    useEffect(() => {
       let width = window.innerWidth
       setScreenWidth(width)
    
       if (width > 1700) {
            setBlockSize(20);
        } else if (width > 1500) {
            setBlockSize(15);
        } else if (width > 1000) {
            setBlockSize(10);
        } else if (width > 700){
            setBlockSize(8);
        }else if (width > 500){
            setBlockSize(5);
        }
    },[])

  
    return (
    <>
        <div className="activity container mx-auto py-20" >
        
        <h2 className="text-3xl font-bold mb-10 text-white text-center ">My Github Activity</h2>
        <div className='relative flex justify-end'>
            <img src={cat} alt="" className='cat_on_activity'/>
        </div>

        <motion.div
                className='p-5 flex justify-center border rounded-lg shadow-lg text-white'
                initial={{ opacity: 0 ,scale: 0.3 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                whileInView={{ opacity: 1, scale:1  }}
                viewport={{ once: true, amount: 0 }}
        >
        
            {contributions.length > 0 ? (
                

                <ActivityCalendar
                    
                    data={contributions}
                    theme={{
                        light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
                        dark: ['#161B22', '#0E4429', '#006D32', '#26A641', '#39D353'],
                      }}
                    blockSize={blockSize}
                />


            ) : (
                <ActivityCalendar data={contributions} loading />
            )}

            </motion.div>
        
        </div>
    </>
    )
}


export default Activity;