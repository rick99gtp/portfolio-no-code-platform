import Card from './Card';

const HowItWorks = () => {
    return (
        <div className='how-it-works__container'>
            <h2>How It Works</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed luctus justo venenatis tortor gravida, vitae fringilla lorem luctus.
                Ut laoreet.
            </p>
            <Card icon="" title="Answer a few questions" description="" orientation="col" />
            <Card icon="" title="Choose a template" description="" orientation="col" />
            <Card icon="" title="Download the files" description="" orientation="col" />
        </div>
    )
}

export default HowItWorks;