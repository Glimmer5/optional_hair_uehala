import ToggleColorModeButton from '../components/toggleColorModeButton';

const Home: React.FC = () => {
  return (
    <div>
      <h2 style={{ fontSize: "50px", fontFamily: "Zen Kaku Gothic Antique" }}>
        こんにちは
      </h2>
      <ToggleColorModeButton />
    </div>
  )
}

export default Home;