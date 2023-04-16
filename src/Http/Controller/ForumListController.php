<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ForumListController extends AbstractController
{
    #[Route('/forum/list', name: 'app_forum_list')]
    public function index(): Response
    {
        return $this->render('forum_list/index.html.twig', [
            'controller_name' => 'ForumListController',
        ]);
    }
}
