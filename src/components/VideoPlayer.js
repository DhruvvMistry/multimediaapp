export const VideoPlayer = ({ path }) => {
    return (
      <div style={{ width: "100%", maxWidth: "100%", overflow: "auto" }}>
        <video controls style={{ width: "100%"}}>
          <source src={path} type="video/mp4" />
        </video>
      </div>
    )
  }