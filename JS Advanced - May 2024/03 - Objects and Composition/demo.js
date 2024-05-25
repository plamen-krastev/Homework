function createRect(width, height) {
  const rect = { width, height };
  rect.getArea = () => {
  return rect.width * rect.height;
  };
  return rect;
  }

  console.log(createRect(12, 15).getArea());