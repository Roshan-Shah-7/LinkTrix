export default function InteractiveMap() {
    return (
        <div className="relative w-full h-0 pb-[56.25%]">
            <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d371.1869261450489!2d85.34098212130013!3d27.7375008548364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1752045341461!5m2!1sen!2snp"
                allowFullScreen
                loading="lazy"
            ></iframe>
        </div>
    )
}