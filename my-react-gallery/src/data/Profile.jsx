export default function Profile() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="Profile"
          style={styles.image}
        />
        <h2 style={styles.name}>Ayush Kumar</h2>
        <p style={styles.role}>Web Developer & DevOps Enthusiast</p>
        <p style={styles.bio}>
          Passionate about building full-stack applications and diving into system design, cloud, and automation!
        </p>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: 'grid',
    placeItems: 'center',  // Centers content horizontally and vertically
    height: 'calc(100vh - 48.82px)',  // Subtract navbar height
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
  },
  image: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid #fff',
    marginBottom: '15px',
  },
  name: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  role: {
    fontSize: '16px',
    color: '#d1cbe6',
    marginBottom: '15px',
  },
  bio: {
    fontSize: '14px',
    lineHeight: '1.5',
    color: '#e8e6ef',
  },
};
