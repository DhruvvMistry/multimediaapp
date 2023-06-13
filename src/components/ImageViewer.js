export const ImageViewer = ({ path }) => {
    return (
      <div style={{ width: "100%", maxWidth: "100%", overflow: "auto" }}>
        <img src={path} style={{ width: "100%"}} />
      </div>
    )
  }