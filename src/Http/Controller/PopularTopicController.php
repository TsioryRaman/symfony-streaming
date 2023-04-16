<?php

namespace App\Http\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PopularTopicController extends AbstractController
{
    #[Route('/popular/topic', name: 'app_popular_topic')]
    public function index(): Response
    {
        return $this->render('popular_topic/index.html.twig', [
            'controller_name' => 'PopularTopicController',
        ]);
    }
}
