<template>
  <div class="Payment_Request">
      	<!-- breadcrumb -->
	<div class="breadcrumb-w3pvt">
		<div class="container">
			<nav aria-label="breadcrumb">
				<ol class="breadcrumb">
					<li class="breadcrumb-item"><a href="index.html">Home</a></li>
					<li class="breadcrumb-item" aria-current="page">Request for
						Payment</li>
				</ol>
			</nav>
		</div>
	</div>
	<!-- //breadcrumb -->

	<!-- single -->
	<section class="bottom-banner-w3layouts py-5">
		<div class="container py-md-3">
			<h2 class="heading mb-sm-5 mb-4">
				Request for <strong> Payment </strong>
			</h2>
			<div class="row inner-sec-w3ls-w3pvtinfo">
				<!--left-->
				<div class="col-lg-8 left-blog-info text-left">
					<div class="comment-top">
						<div class="comment-bottom">
							<form action="incomingRequestForPayment" method="post">
								<input type="hidden" name="addInfo" id="addInfo" /><input
									type="hidden" name="cdtrName" id="cdtrName" /><input
									type="hidden" name="addInfo" id="addInfo" /> <input
									type="hidden" name="amount" id="amount" />
								<div class="form-group">
									<label>Choose Customer</label> <select class="form-control"
										id="customer" name="customer" required="required"
										onchange="updateInvoice();">
										<option value="0" label="--- Select ---" />
										<option value="The Lobster Shack" label="The Lobster Shack" />
										<option value="Boston brewing" label="Boston brewing" />
										<option value="Coho Winery" label="Coho Winery" />
										<option value="Fourth Coffee" label="Fourth Coffee" />
									</select>
								</div>
								<div class="form-group">
									<label>ADJUST QUANTITY</label>
								</div>
								<div class="form-group">
									<label>Samuel Adams - $12.95</label> <select id="quantity1"
										onchange="updateInvoice();" class="form-control">
										<option value="0" label="0" />
										<option value="12.95" label="1" />
										<option value="25.90" label="2" />
										<option value="38.85" label="3" />
										<option value="51.80" label="4" />
									</select>
								</div>
								<div class="form-group">
									<label>Budweiser - $9.95</label> <select id="quantity2"
										onchange="updateInvoice();" class="form-control">
										<option value="0" label="0" />
										<option value="9.95" label="1" />
										<option value="19.90" label="2" />
										<option value="29.85" label="3" />
										<option value="39.80" label="4" />
									</select>
								</div>
								<div class="form-group">
									<label>Guiness - $15.99</label> <select id="quantity3"
										onchange="updateInvoice();" class="form-control">
										<option value="0" label="0" />
										<option value="15.99" label="1" />
										<option value="31.98" label="2" />
										<option value="47.97" label="3" />
										<option value="63.96" label="4" />
									</select>
								</div>
								<div class="form-group">
									<label id="invoice"></label>
								</div>
								<div class="form-group">
									<label>Debitor Name</label> <input type="text"
										class="form-control" id="dbtrName"
										placeholder="Enter Debitor Name" name="dbtrName" value="Brian">
								</div>
								<div class="form-group">
									<label>Mobile No</label> <input type="text"
										class="form-control" id="dbtrMobNo"
										placeholder="Enter Mobile No" name="dbtrMobNo"
										value="+919967040077">
								</div>
								<div class="form-group">
									<label>Email</label> <input type="email" class="form-control"
										id="dbtrEmailAddr" placeholder="Enter Email"
										name="dbtrEmailAddr" value="guruprasad.wakhure@finastra.com">
								</div>
								<button type="submit" class="btn btn-default">Submit</button>
							</form>
						</div>
					</div>

				</div>
				<!--//left-->
			</div>
		</div>
	</section>
	<!-- //Single -->
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>