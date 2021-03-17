export function imageUrlIsValid({ url }: any) {
  const isValid = new Promise((resolve, reject) => {
    const image = new Image();
    image.src = url;
    image.srcset = url;
    image.onload = () => true;
    image.onerror = () => false;
  });

  return isValid;
}
