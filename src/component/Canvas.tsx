import React, {FC, useEffect, useRef} from 'react';

const diplomas = {
  'blanche-jaune': 'attestation-blanche-jaune-1.jpg',
  'jaune': 'diplome-jaune-1.jpg',
  'jaune-orange': 'attestation-jaune-orange-1.jpg',
  'orange': 'diplome-orange-1.jpg',
  'orange-verte': 'attestation-orange-verte-1.jpg',
  'verte-bleu': 'attestation-verte-bleue-1.jpg',
  'bleue': 'diplome-bleue-1.jpg',
};

const users = [
  {
    lastname: 'BALME SAUMUR',
    firstname: 'Léonie',
    diploma: 'jaune',
  },
  {
    lastname: 'NASRI',
    firstname: 'Sarah',
    diploma: 'jaune',
  },
  {
    lastname: 'BUGLI',
    firstname: 'Léna',
    diploma: 'orange',
  },
  {
    lastname: 'BUGLI',
    firstname: 'Lucas',
    diploma: 'orange-verte',
  },
  {
    lastname: 'DE JAHAM',
    firstname: 'Clarence',
    diploma: 'verte-bleu',
  },
  {
    lastname: 'DHIEN',
    firstname: 'Sasha',
    diploma: 'jaune',
  },
  {
    lastname: 'GAILLOUD',
    firstname: 'Mathys',
    diploma: 'jaune',
  },
  {
    lastname: 'GAILLOUD',
    firstname: 'Nathan',
    diploma: 'blanche-jaune',
  },
  {
    lastname: 'GIBERT',
    firstname: 'Liam',
    diploma: 'orange-verte',
  },
  {
    lastname: 'GUEDON',
    firstname: 'Lukas',
    diploma: 'jaune-orange',
  },
  {
    lastname: 'JOANNARD',
    firstname: 'Mathis',
    diploma: 'blanche-jaune',
  },
  {
    lastname: 'PETRIZELLI',
    firstname: 'Kelyan',
    diploma: 'blanche-jaune',
  },
  {
    lastname: 'ROFFET',
    firstname: 'Bastien',
    diploma: 'orange',
  },
  {
    lastname: 'WIBAILLIE',
    firstname: 'Kylian',
    diploma: 'jaune-orange',
  },
  {
    lastname: 'BOUABBAS',
    firstname: 'Zakaria',
    diploma: 'orange-verte',
  },
];

const slugify = (text) =>
  text
      .toString()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-');

export const Canvas: FC = () => {
  const canvas = useRef<HTMLCanvasElement|null>(null);
  let ctx: CanvasRenderingContext2D | null = null;

  const initCanvas = async (lastname, firstname, dipIndex) => {
    const canvasEle = canvas.current;
    if (canvasEle) {
      ctx = canvasEle.getContext('2d');
      const imageOjb = new Image();
      imageOjb.onload = () => {
        if (ctx) {
          ctx.drawImage(imageOjb, 0, 0);
          ctx.font = '500 35pt Roboto';
          ctx.fillText('Coublevie Karaté Club', canvasEle.width / 3 - 30, canvasEle.height / 2 + 10);
          ctx.fillText('Coublevie', canvasEle.width / 3 - 30, canvasEle.height / 1.5 + 16);
          ctx.fillText('29/06/2022', canvasEle.width / 1.6 - 63, canvasEle.height / 1.5 + 15);
          ctx.fillText(`${firstname} ${lastname}`, canvasEle.width / 3 - 30, canvasEle.height / 2 + 103);
        }
      };
      imageOjb.src = `/media/diplomas/${diplomas[dipIndex]}`;

      setTimeout(() => {
        saveScreenshot(firstname, lastname);
      }, 100);
    }
  };

  const saveScreenshot = (firstname, lastname) => {
    const fileName = slugify(`diplome-${firstname}-${lastname}`);
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
    const user = users[14];
    initCanvas(user.lastname, user.firstname, user.diploma);
  }, []);

  return (
    <div className="App">
      <canvas style={{marginTop: '2rem'}} width={'2339'} height={'1654'} ref={canvas}></canvas>
      <button type={'button'} onClick={saveScreenshot}>download</button>
    </div>
  );
};
