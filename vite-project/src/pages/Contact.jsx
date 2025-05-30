export const Contact =()=>{
    const handelFormSubmit=(FormData)=>{
        //console.log(formData.entries());
        const formInputData = Object.formEntries(FormData.entries());
        //console.log(formInputData);
    }
    return <section className="section-contact">
        <h2 className="container-title">
            Contact Us
        </h2>
         <div className="contact-wrapper container">
        <form action={handelFormSubmit}>
            <input type="text" className="form-control" required autoComplete="false" placeholder="Enter your Name" name="username"/>
            <input type="email" className="form-control" required autoComplete="false" placeholder="Enter your email" name="email"/>
            <textarea className="form-control" rows="10" placeholder="Enter your message" name="message" required autoComplete="false"></textarea>
            <button type="submit" value="send">Send</button>
        </form>
</div>
    </section>
};