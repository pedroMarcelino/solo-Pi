<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login - Crud Commerce</title>
    <?php include ('../asset/includes/links.php');?>
    <link rel="stylesheet" href="login.css">
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-12 card-login">
                <h1 class="center txt-purple">Crud Commerce</h1>
                <form id="form-login">
                    <div class="form-group">
                        <label for="input-email">Email: </label>
                        <input type="email" class="form-control input-line" id="input-email" placeholder="example@example.com">
                        <small id="small-email" class="text-danger hidden">Preencha esse campo!</small>
                        <small id="check-email" class="text-danger hidden">Email com o formato errado!</small>
                    </div>
                    <div class="form-group">
                        <label for="input-password">Senha:</label>
                        <input type="password" class="form-control" id="input-password" placeholder="********">
                        <small id="small-password" class="text-danger hidden">Preencha esse campo!</small>
                    </div>
                </form>
                <button id="submit" class="btn btn-outline-default purple btn-block btn-round">Enviar</button>
                <button id="loading" class="btn btn-outline-default orange btn-block btn-round hidden" disabled><i class="fas fa-spinner fa-spin"></i>  Carregando...</button>
                <button id="finish" class="btn btn-outline-success btn-block btn-round hidden"><i class="fas fa-check animated slideInDown"></i></button>
            </div>
        </div>
    </div>

    <script src="login.js"></script>    
</body>
</html>