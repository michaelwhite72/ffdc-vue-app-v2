<template>

<div class="Services">
	<!-- breadcrumb -->
	<div class="breadcrumb-w3pvt">
		<div class="container">
			<nav aria-label="breadcrumb">
				<ol class="breadcrumb">
					<li class="breadcrumb-item"><a href="index.html">Home</a></li>
					<li class="breadcrumb-item" aria-current="page">Services</li>
				</ol>
			</nav>
		</div>
	</div>
	<!-- //breadcrumb -->

	<!-- services -->
	<section class="services py-5">
		<div class="container py-md-5 py-sm-3">
			<h3 class="heading mb-5">
				Services <strong> we provide </strong>
			</h3>
			<div class="row">
				<div class="col-lg-4">
					<div class="row">
						<div class="col-9 mt-lg-5 grid">
							<h3>International Payment Initiation</h3>
							<p class="mt-2">Initiate a high value cross-border payment
								through SWIFT Gateway</p>
						</div>
						<div class="col-3 mt-lg-5 icon text-lg-center text-left grid1">
							<img src="images/a2.png" alt="" class="img-fluid">
						</div>

						<div class="col-9 mt-sm-5 mt-4 grid">
							<h3>Real-Time Payment Initiation</h3>
							<p class="mt-2">Initiate real-time payment for Immediate
								Payment clearings.</p>
						</div>
						<div
							class="col-3 mt-sm-5 mt-4 icon text-lg-center text-left grid4">
							<img src="images/a3.png" alt="" class="img-fluid">
						</div>

						<div class="col-9 mt-sm-5 mt-4 grid">
							<h3>Payment Request</h3>
							<p class="mt-2">Initiate market specific real-time payment
								requests for USD real-time schemes.</p>
						</div>
						<div
							class="col-3 mt-sm-5 mt-4 icon text-lg-center text-left grid5">
							<img src="images/a1.png" alt="" class="img-fluid">
						</div>

					</div>
				</div>
				<div class="col-lg-4 text-center my-lg-0 my-4">
					<img src="images/serv.jpg" alt="" class="img-fluid">
				</div>
				<div class="col-lg-4 text-right">
					<div class="row">
						<div
							class="col-3 mt-sm-5 mt-4 icon text-lg-center text-right grid6">
							<img src="images/a2.png" alt="" class="img-fluid">
						</div>
						<div class="col-9 mt-sm-5 mt-4 grid">
							<h3>International Payment Initiation</h3>
							<p class="mt-2">Get a status report of a payment</p>
						</div>

						<div
							class="col-3 mt-sm-5 mt-4 icon text-lg-center text-right grid7">
							<img src="images/a3.png" alt="" class="img-fluid">
						</div>
						<div class="col-9 mt-sm-5 mt-4 grid">
							<h3>Real-Time Payment Initiation</h3>
							<p class="mt-2">Get a status report of a payment.</p>
						</div>

						<div
							class="col-3 mt-sm-5 mt-4 icon text-lg-center text-right grid3">
							<img src="images/a1.png" alt="" class="img-fluid">
						</div>
						<div class="col-9 mt-sm-5 mt-4 grid">
							<h3>Payment Request</h3>
							<p class="mt-2">Get the status of real-time payment requests.</p>
						</div>

					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- //services -->

	<!-- other services -->
	<section class="other_services pt-5">
		<div class="container py-md-5 py-3">
			<h2 class="heading mb-5">
				A wide range<strong> of Banking services </strong>
			</h2>
			<div class="row">
				<div class="col-lg-4 col-sm-6 mb-5">
					<div class="grid">
						<img src="images/banner2.jpg" alt="" class="img-fluid" />
						<div class="info p-4">
							<h4 class="">Payment Request</h4>
							<p class="my-3">Initiate market specific real-time payment
								requests for USD real-time schemes....</p>
							<router-link to="/PaymentRequest">More</router-link>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-sm-6 mb-5">
					<div class="grid">
						<img src="images/banner1.jpg" alt="" class="img-fluid" />
						<div class="info p-4">
							<h4 class="">Pending Payment Request</h4>
							<p class="my-3">All the pending Request for Payment ....</p>
							<router-link to="/PendingPaymentRequest">More</router-link>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-sm-6 mb-5">
					<div class="grid">
						<img src="images/banner2.jpg" alt="" class="img-fluid" />
						<div class="info p-4">
							<h4 class="">Loan Management</h4>
							<p class="my-3">Onec consequat sapien ut amet leo cursus
								rhoncus. Nullam dui mi....</p>
							<a href="#">Read More </a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- //other services -->


</div>   
  
</template>

<script>
export default {

}
</script>

<style>

</style>