import Card from './Card';
import './Cards.css';

const Cards = () =>{
  return(
    <>
    <div className="cards-area-holder">
        <Card title='Instant Server Start' text='One demand file serving over native ESM, no banding required!'/>
        <Card title='Lightning Fast HMR' text='Hot Modules Replacement (HMR) that stays fast regardless of app size.'/>
        <Card title='Rich Features' text='Out-of-the-box supports for TypeScript, JSX, CSS and more.'/>
        <Card title='Optimized Build' text='Pre-configured Rollup build with multi-page and library mode support'/>
        <Card title='Universal Plugins' text='Rollup-superset plugin interfface shared between dev and build.'/>
        <Card title='Fully Tped APIs' text='Flexible programmatic APIs with full TypeScript typing.'/>
    </div>
    </>
  )
}

export default Cards