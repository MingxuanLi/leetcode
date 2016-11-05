package com.mingxuanli.leetcode.group_anagram;

import java.util.*;

/**
 * Created by mingli on 3/11/2016.
 */
public class Anagram {

    public static void main(String[] args){

        String[] words = {"eat", "tea", "tan", "ate", "nat", "bat"};
        Anagram anagram = new Anagram();
        long time1 = System.currentTimeMillis();
        System.out.println(anagram.groupAnagrams(words).size());
        long time2 = System.currentTimeMillis();
        System.out.println(time2 - time1);
    }

    public List<List<String>> groupAnagrams(String[] strs) {
        if(strs == null){
            return null;
        }

        Map<String, List<String>> map = new HashMap<String, List<String>>();
        for(int i = 0; i < strs.length; i++){
            char[] chars = strs[i].toCharArray();
            Arrays.sort(chars);
            String key = String.valueOf(chars);
            if(!map.containsKey(key)){
                map.put(key, new ArrayList<String>());
            }
            map.get(key).add(strs[i]);
        }

        for(String key: map.keySet()) {
            Collections.sort(map.get(key));
        }

        return new ArrayList<List<String>>(map.values());
    }
}
