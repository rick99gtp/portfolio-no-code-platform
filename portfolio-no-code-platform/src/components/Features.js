import Card from './Card';

const Features = () => {
    return (
        <div className='features__container'>
            <h2>Features</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed luctus justo venenatis tortor gravida, vitae fringilla lorem luctus. 
                Ut laoreet.
            </p>
            <div className='features__cards'>
                <Card icon="" title="Saves time" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus justo venenatis tortor gravida, vitae fringilla lorem luctus. Ut laoreet." orientation="col" />
                <Card icon="" title="Boost your online presence" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus justo venenatis tortor gravida, vitae fringilla lorem luctus. Ut laoreet." orientation="col" />
                <Card icon="" title="Great 1st impression" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus justo venenatis tortor gravida, vitae fringilla lorem luctus. Ut laoreet." orientation="col" />
                <Card icon="" title="Affordable" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus justo venenatis tortor gravida, vitae fringilla lorem luctus. Ut laoreet." orientation="col" />
            </div>
        </div>
    )
}

export default Features;