const formatTime = (timestamp) => {
  if (!timestamp) return "—"; // boşsa çizgi göster
  return new Date(timestamp * 1000).toLocaleTimeString("tr-TR", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export default formatTime;
