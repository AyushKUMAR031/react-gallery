export default function About() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>About the Gallery</h2>
        <p style={styles.text}>
          Welcome to the React Gallery! This project is designed to showcase beautiful
          images, and it allows users to view, navigate, and interact with a wide variety
          of stunning photos. The gallery is built using React and styled with modern CSS.
          Feel free to explore, and let us know what you think!
        </p>
        <h3 style={styles.subtitle}>Technologies Used:</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>React</li>
          <li style={styles.listItem}>React Router</li>
          <li style={styles.listItem}>CSS-in-JSX</li>
          <li style={styles.listItem}>Styled Components</li>
        </ul>
        <h3 style={styles.subtitle}>Our Vision</h3>
        <p style={styles.text}>
          Our vision is to create a visually appealing and easy-to-use gallery for displaying
          high-quality images in a clean, responsive layout. This project aims to demonstrate
          the power of React and CSS-in-JSX, offering a dynamic user experience.
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    placeItems: 'center',  // Centers content horizontally and vertically
    height: 'calc(100vh - 50px)',  // Subtract navbar height
  },
  card: {
    background: 'linear-gradient(145deg, #4e3f64, #6d5b89)',
    color: '#ffffff',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
    maxWidth: '600px',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  text: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#e0d0f1',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#d1c8e1',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
    fontSize: '16px',
    textAlign: 'left',
    color: '#e0d0f1',
  },
  listItem: {
    marginBottom: '10px',
  },
};
