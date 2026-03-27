import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      style={{
        position: 'fixed',
        inset: 0,
        background: '#0a0a0f',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        gap: '24px',
      }}
    >
      {/* Logo mark */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{
          width: 72,
          height: 72,
          borderRadius: 20,
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: 28,
          color: 'white',
          boxShadow: '0 0 60px rgba(99,102,241,0.5)',
          marginBottom: 8,
        }}
      >
        KG
      </motion.div>

      {/* Spinner ring */}
      <div className="loader-ring" />

      {/* Name */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        style={{
          color: '#94a3b8',
          fontSize: 14,
          fontWeight: 500,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}
      >
        Loading Portfolio...
      </motion.p>

      {/* Progress bar */}
      <motion.div
        style={{
          width: 200,
          height: 2,
          background: 'rgba(255,255,255,0.06)',
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #22d3ee)',
            borderRadius: 2,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Loader;
