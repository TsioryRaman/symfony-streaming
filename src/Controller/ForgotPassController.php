<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ForgotPassController extends AbstractController
{
    #[Route('/forgot/pass', name: 'app_forgot_pass')]
    public function index(): Response
    {
        return $this->render('forgot_pass/index.html.twig', [
            'controller_name' => 'ForgotPassController',
        ]);
    }
}
