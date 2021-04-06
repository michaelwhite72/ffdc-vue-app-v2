<template>
  <div class="Contact">
<!-- breadcrumb -->
<div class="breadcrumb-w3pvt">
	<div class="container">
	<nav aria-label="breadcrumb">
		<ol class="breadcrumb">
			<li class="breadcrumb-item">
				<a href="index.html">Home</a>
			</li>
			<li class="breadcrumb-item" aria-current="page">Contact</li>
		</ol>
	</nav>
	</div>
</div>
<!-- //breadcrumb -->
	
<!-- contact -->
<section class="contact py-5">
	<div class="container py-lg-5">
		<h2 class="heading mb-sm-5 mb-4">Get in <strong> touch with us </strong></h2>
		<div class="row">
			<div class="col-lg-4 col-md-6 contact-address">
				<h4 class="mb-4 w3f_title">Contact Address</h4>
				<ul class="list-w3">
					<li class="d-flex"><span class="fa mt-1 mr-1 fa-map-marker"></span>2130 Fulton Street, San Diego, <br>CA 94117-1080 USA</li>
					<li class="my-3"><span class="fa mr-1 fa-phone"></span>1-600-1234-567</li>
					<li class="my-3"><span class="fa mr-1 fa-phone"></span>1-600-1234-567</li>
					<li class=""><span class="fa mr-1 fa-envelope"></span><a href="mailto:info@example.com">info@example.com</a></li>
				</ul>
				<h4 class="mt-sm-5 mt-4 mb-3 w3f_title">Follow Us</h4>
				<p>Sed mattis hendrerit dolor sed rhoncus. Praesent arcu quam, sodales ac varius.</p>
				<ul class="list-social">
					<li><a href="#" class="facebook"><span class="fa mr-1 fa-facebook"></span></a></li>
					<li class="my-3"><a href="#" class="twitter"><span class="fa mr-1 fa-twitter"></span></a></li>
					<li class="my-3"><a href="#" class="google"><span class="fa mr-1 fa-google-plus"></span></a></li>
					<li class=""><a href="#" class="linkedin"><span class="fa mr-1 fa-linkedin"></span></a></li>
				</ul>
			</div>
			<div class="col-lg-4 col-md-6 contact-form mt-md-0 mt-sm-5 mt-4">
				<h4 class="mb-4 w3f_title">Contact Form</h4>
				<form name="contactform" id="contactform" method="post" action="#" onsubmit="return(validate());" novalidate="novalidate">
						<div class="form-group">
						  <label>Name</label>
						  <input type="text" class="form-control" id="name" placeholder="Enter Name" name="name">
						</div>
						<div class="form-group">
						  <label>Email</label>
						  <input type="email" class="form-control" id="email" placeholder="Enter Email" name="email">
						</div>
						<div class="form-group">
						  <label>How can we help?</label>
						  <textarea name="issues" class="form-control" id="iq" placeholder="Enter Your Message Here"></textarea>
						</div>				
						<button type="submit" class="btn btn-default">Submit</button>
					</form>
			</div>
			<div class="col-lg-4 contact-map mt-lg-0 mt-sm-5 mt-4">
				<h4 class="mb-4 w3f_title">Contact Map</h4>
				<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3153.5552048126606!2d-122.45442878440707!3d37.77702641980233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s2130%20fulton%20street%2C%20san%20diego%2C%20ca%2094117!5e0!3m2!1sen!2sus!4v1617740901486!5m2!1sen!2sus" allowfullscreen=""></iframe>
			</div>
		</div>
	</div>
</section>
<!-- //contact -->

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>