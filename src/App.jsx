  import'./App.css'
  import { Card } from './TwitterFollowCard.jsx'

  const user= [
    {
    userName:'Adrizc',
    name:'Adriana Zambrano',
    isFollowing:true
  },
  {
    userName:'juliRodro',
    name:'Julian Rodriguez',
    isFollowing:false
  },
  {
    userName:'romonto',
    name:'Rodrigo Montoña',
    isFollowing:true
  }

]

export function App() {


    return (

        <section className='App' >
            {
                user.map(({ userName, name, isFollowing }) => (

                    <Card key={userName} userName={userName} initialIsFollowing={isFollowing}>
                        {name}
                    </Card>

                ))
            }

        </section>
    )
}