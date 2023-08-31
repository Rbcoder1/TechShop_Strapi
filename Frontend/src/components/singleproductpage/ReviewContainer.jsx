import React from 'react'
import '../../Style/product_detail.css'

const ReviewContainer = () => {
    return (
        <section className="prod-review-sec">
            <div className="heading content-sub-head">
                <h3 className="heading">Review & Ratings</h3>
            </div>
            <div className="review-sumary row">
                <div className="col-md-6 col-sm-6">
                    rating
                </div>
                <div className="col-md-6 col-sm-6">
                    review count
                </div>
            </div>
        </section>
    )
}

export default ReviewContainer
