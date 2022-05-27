import React, {FC, useEffect, useRef} from 'react';

const Canvas: FC = () => {
  const canvas = useRef<HTMLCanvasElement|null>(null);
  let ctx: CanvasRenderingContext2D | null = null;

  const initCanvas = () => {
    const canvasEle = canvas.current;
    if (canvasEle) {
      ctx = canvasEle.getContext('2d');
      const imageOjb = new Image();
      imageOjb.onload = () => {
        if (ctx) {
          ctx.drawImage(imageOjb, 0, 0);
          ctx.font = '25pt Calibri';
          ctx.fillText('SKC Voreppe', 560, 630);
          ctx.fillText('Voreppe', 560, 843);
          ctx.fillText('15/05/2022', 1045, 843);
          ctx.fillText('Baptiste BRAND', 560, 700);
        }
      };
      imageOjb.src = '/diplomas/diplome-orange_page.jpg';
    }
  };

  const saveScreenshot = () => {
    const fileName = 'image';
    const link = document.createElement('a');
    link.download = fileName + '.png';
    if (canvas && canvas.current) {
      // @ts-ignore
      canvas.current.toBlob(function(blob: any) {
        console.log(blob);
        link.href = URL.createObjectURL(blob);
        link.click();
      });
    }
  };

  useEffect(() => {
    initCanvas();
  }, []);

  return (
    <div className="App">
      <canvas style={{marginTop: '2rem'}} width={1724} height={1241} ref={canvas}></canvas>
      <button type={'button'} onClick={saveScreenshot}>download</button>
    </div>
  );
};
