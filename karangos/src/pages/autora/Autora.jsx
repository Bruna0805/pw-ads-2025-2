import React from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import FavoriteIcon from '@mui/icons-material/Favorite'

// Fazendo a importação da foto
import FotoAutora from '../../assets/FotoAutora.jpeg'

export default function Autora() {
  // Estado dos likes lendo localStorage
  const [likes, setLikes] = React.useState(() => {
    const salvou = localStorage.getItem('likes')
    if(salvou) {
      return Number(salvou)
    } else {
      return 0
    }
  })

  // Salva no localStorage na mudança de likes
  React.useEffect(() => {
    localStorage.setItem('likes', likes)
  }, [likes])

  function curtir() {
    setLikes(likes + 1)
  }
  
  // Texto sobre a autora
  return (
    <div>
      <Typography variant="h1">
        Sobre a autora
      </Typography>


      <Card style={{ width: '350px'}}>
        <img 
          src={FotoAutora} 
          style={{ 
            width: '350px',
            height: '300px'
          }} 
        />

        <CardContent>
          <Typography variant="h5">
            Bruna Ercolino de Souza
          </Typography>

          <Typography variant="body2" style={{ marginTop: '10px' }}>
            Cursei Técnico em Informática no Senac (2023-2025) e sou estudante de Análise e Desenvolvimento de 
            Sistemas na Faculdade de Técnologia de Franca(Fatec). Pretendo entrar na área de dados ou programação.
          </Typography>
        </CardContent>

        <div>
          <Button 
            startIcon={<FavoriteIcon />}
            onClick={curtir}
            style={{ 
              backgroundColor: '#ff0059ff', 
              color: 'white' 
            }}
          >
            Curtir ({likes})
          </Button>
        </div>
      </Card>
    </div>
  )
}
