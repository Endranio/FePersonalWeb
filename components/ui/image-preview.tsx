
import { useEffect, useState } from "react";

type Props ={
    file:File| null
    defaultPreview?:string
}

export default function ImagePreview({file ,defaultPreview} : Props) {
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!file){
      setPreview(null)
      return;}
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };

    reader.readAsDataURL(file);
    
  }, [file]);
if(!preview && !defaultPreview){
    return null
}
  return  (
    
    // eslint-disable-next-line @next/next/no-img-element
    <img src={preview || defaultPreview } alt="Preview" style={{ maxWidth: "200px" }} />
  ) 
}
