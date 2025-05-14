export default function Home() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Welcome to the Home Page</h2>
        <p style={styles.description}>This is where you can find the latest updates and commits.</p>
        <div style={styles.gifContainer}>
          <img
            src="https://media.giphy.com/media/3oEjI6S7vH5gZ8A7vW/giphy.gif"
            alt="Exciting GIF"
            style={styles.gif}
          />
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: 'grid',
    placeItems: 'center',
    height: 'calc(100vh - 48.82px)',

  },
  card: {
    background: 'linear-gradient(145deg, #4e3f64, #6d5b89)',
    color: '#ffffff',
    padding: '30px',
    borderRadius: '20px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
    maxWidth: '400px',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
    width: '100%',
    height: 'auto',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  description: {
    fontSize: '16px',
    color: '#d1cbe6',
    marginBottom: '15px',
  },
  gifContainer: {
    marginTop: '20px',
  },
  gif: {
    width: '100%',
    maxWidth: '300px',
    height: 'auto',
    borderRadius: '10px',
  },
};
