



<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>JSP Page</title>
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
</head>
<body>









	<div class="container">
		<h2>List Users</h2>
		<a href="UserServlet?action=AddOrEdit" class="btn btn-primary">Add
			Users</a>
		<table class="table table-bordered">
			<thead>
				<tr>
					<th>Email</th>
					<th>First</th>
					<th>LastName</th>
					
				</tr>
			</thead>
			<tbody>
				
					
					<<(forEch var = "user" Items="LIST_USER"
						
							<tr>
								<td>${user.username}</td>
								<td>${user.email}</td>
								<td>${user.firstname}</td>
								<td>${user.lastname}</td>
								
								<td><a class="btn btn-primary btn-sm"
									href="UserServlet?action=AddOrEdit&username=a3">Edit</a>
									| <a class="btn btn-danger btn-sm"
									href="UserServlet?action=Delete&username=a3">Del</a></td>
							</tr>
						
							<tr>
								<td>a4</td>
								<td>123</td>
								<td>Nguyen Van A4</td>
								<td>44</td>
								<td>22-01-2021 </td>
								<td>Nam</td>
								<td><a class="btn btn-primary btn-sm"
									href="UserServlet?action=AddOrEdit&username=a4">Edit</a>
									| <a class="btn btn-danger btn-sm"
									href="UserServlet?action=Delete&username=a4">Del</a></td>
							</tr>
						
							<tr>
								<td>a5</td>
								<td>123</td>
								<td>12</td>
								<td>0</td>
								<td>12-12-2012 </td>
								<td>Nữ</td>
								<td><a class="btn btn-primary btn-sm"
									href="UserServlet?action=AddOrEdit&username=a5">Edit</a>
									| <a class="btn btn-danger btn-sm"
									href="UserServlet?action=Delete&username=a5">Del</a></td>
							</tr>
						
							<tr>
								<td>fpoly</td>
								<td>123</td>
								<td>Fpoly Da Nang</td>
								<td>33</td>
								<td>22-01-2021 </td>
								<td>Nam</td>
								<td><a class="btn btn-primary btn-sm"
									href="UserServlet?action=AddOrEdit&username=fpoly">Edit</a>
									| <a class="btn btn-danger btn-sm"
									href="UserServlet?action=Delete&username=fpoly">Del</a></td>
							</tr>
						
					
				
			</tbody>
		</table>
	</div>
</body>
</html>

