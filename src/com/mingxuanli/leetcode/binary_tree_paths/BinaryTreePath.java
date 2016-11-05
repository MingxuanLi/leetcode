package com.mingxuanli.leetcode.binary_tree_paths;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Created by mingli on 4/11/2016.
 */
public class BinaryTreePath {

    public List<String> binaryTreePaths(TreeNode root) {
        if(root.left == null && root.right == null){
            return Arrays.asList(root.val + "");
        }

        List<String> list = new ArrayList<String>();
        if (root.left != null) {
            for(String str : binaryTreePaths(root.left)){
                list.add(root.val + "->" + str);
            }
        }
        if (root.right != null) {
            for(String str : binaryTreePaths(root.right)){
                list.add(root.val + "->" + str);
            }
        }
        return list;
    }

    public static void main(String[] args) {
        TreeNode t5 = new TreeNode(5);
        TreeNode t3 = new TreeNode(3);
        TreeNode t2 = new TreeNode(2);
        TreeNode t1 = new TreeNode(1);
        t1.left = t2;
        t1.right = t3;
        t2.right = t5;
        BinaryTreePath btp = new BinaryTreePath();
        List<String> lists = btp.binaryTreePaths(t1);
        for(String str: lists){
            System.out.println(str);
        }
    }
}
